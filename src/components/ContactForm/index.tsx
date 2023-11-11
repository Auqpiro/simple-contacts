import {IContact} from "../../type";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

type FormValues = Omit<IContact, "id">;

interface AddFormProps {
    mode: "add"
    onSubmit: (formData: FormValues) => void
}

interface EditFormProps {
    mode: "edit"
    selected: IContact
    onSubmit: (formData: FormValues) => void
}

type FormProps = AddFormProps | EditFormProps;

function ContactForm(props: FormProps) {
    const {
        register,
        formState: {
            errors,
            isValid,
            isDirty,
        },
        handleSubmit,
        setFocus,
    } = useForm<FormValues>({
        mode: "onChange",
    });

    useEffect(() => {
        setFocus("name");
    }, [setFocus]);

    const canSubmit: boolean = ("selected" in props) ? !(isValid && isDirty) : !isValid;

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div>
                <label>
                    Name
                    <input
                        defaultValue={"selected" in props ? props.selected.name : ""}
                        {...register("name", {
                            required: {
                                value: true,
                                message: "required"
                            },
                            minLength: {
                                value: 2,
                                message: "min length 2 symbols"
                            },
                        })}
                    />
                    {errors?.name && <p>{errors.name.message ?? "error"}</p>}
                </label>
            </div>
            <div>
                <label>
                    Phone
                    <input
                        type="tel"
                        defaultValue={"selected" in props ? props.selected.phone : ""}
                        {...register("phone", {
                            required: {
                                value: true,
                                message: "required"
                            },
                            pattern: {
                                value: /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                                message: "not match phone number pattern"
                            },
                        })}
                    />
                    {errors?.phone && <p>{errors.phone.message ?? "error"}</p>}
                </label>
            </div>
            <div>
                <label>
                    Email
                    <input
                        type="email"
                        defaultValue={"selected" in props ? props.selected.email : ""}
                        {...register("email", {
                            required: {
                                value: true,
                                message: "required"
                            },
                            pattern: {
                                value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                                message: "not match email pattern"
                            },
                        })}
                    />
                    {errors?.email && <p>{errors.email.message ?? "error"}</p>}
                </label>
            </div>
            <button type="submit" disabled={canSubmit}>SUBMIT</button>
        </form>
    )
}

export default ContactForm;
