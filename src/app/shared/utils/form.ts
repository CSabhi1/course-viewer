export const markFormGroupTouched = (formGroup: { controls: any; }) => {
    (Object as any).values(formGroup.controls).forEach((control: { markAsTouched?: any; controls: any; }) => {
        control.markAsTouched();

        if (control.controls) {
            markFormGroupTouched(control);
        }
    });
};
