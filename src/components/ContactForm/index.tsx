import {IContact} from "../../type";
import {useForm} from "react-hook-form";
import React, {useEffect} from "react";
import Button from "../Button";
import styles from "./form.module.scss";
import {FaUserAlt} from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";

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
        <div className={styles.container}>
            <form className={styles.content} onSubmit={handleSubmit(props.onSubmit)}>
                <fieldset>
                    <legend>
                        <FaUserAlt/>
                    </legend>
                    <div className={styles.form_item}>
                        <RiContactsLine/>
                        <label>
                            Name
                        </label>
                        <input
                            placeholder="Your name"
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
                    </div>
                    <p className={styles.error_message}>{errors?.name && (errors.name.message ?? "error")}</p>
                    <div className={styles.form_item}>
                        <LuPhone/>
                        <label>
                            Phone
                        </label>
                        <input
                            type="tel"
                            placeholder="Your phone"
                            defaultValue={"selected" in props ? props.selected.phone : ""}
                            {...register("phone", {
                                // required: {
                                //     value: true,
                                //     message: "required"
                                // },
                                pattern: {
                                    value: /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                                    message: "not match phone number pattern"
                                },
                            })}
                        />
                    </div>
                    <p className={styles.error_message}>{errors?.phone && (errors.phone.message ?? "error")}</p>
                    <div className={styles.form_item}>
                        <MdOutlineAlternateEmail/>
                        <label>
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Your email"
                            defaultValue={"selected" in props ? props.selected.email : ""}
                            {...register("email", {
                                // required: {
                                //     value: true,
                                //     message: "required"
                                // },
                                pattern: {
                                    value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                                    message: "not match email pattern"
                                },
                            })}
                        />
                    </div>
                    <p className={styles.error_message}>{errors?.email && (errors.email.message ?? "error")}</p>
                </fieldset>
                <Button
                    variant={!canSubmit ? "primary" : "secondary"}
                    type="submit"
                    disabled={canSubmit}
                >
                    SUBMIT
                </Button>
            </form>
        </div>
    )
}

export default ContactForm;
