import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { ColumnWrapper, RowWrapper } from ".././styled/Wrappers";
import { NormalButton, WarningButton } from ".././styled/StyledButtons";
import { IGuest } from "../../models/IGuest";
import { StyledInput } from "../styled/input/StyledInput";
import { StyledErrorParagraph } from "../styled/input/StyledErrorParagraph";

interface ICompleteBookingProps {
  sendBooking(guest: IGuest): void;
  postBooking(): Promise<void>;
}

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
};

export const CompleteBooking = ({
  sendBooking,
  postBooking,
}: ICompleteBookingProps) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsSubmit(true);
    console.log("Data", data);
    const guest: IGuest = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
    sendBooking(guest);

    // reset();
  };
  useEffect(() => {
    if (isSubmit) {
      const submit = async () => {
        try {
          await postBooking();
        } catch (error) {
          console.error(error);
        } finally {
          setIsSubmit(false);
        }
      };
      submit();
    }
  }, [isSubmit, postBooking]);

  const handleCancel = () => {
    reset();
    console.log("Avbryt");
  };

  return (
    <>
      <h3>Vänligen fyll i dina kontaktuppgifter:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ColumnWrapper>
          <StyledInput
            type="text"
            placeholder="Namn (för- och efternamn):"
            id="name"
            {...register("name", {
              required: true,
              maxLength: 150,
              pattern:
                /[A-Ö][a-ö]*((-|\s)*[A-Ö][a-ö])+\s*[A-Ö][a-ö]*((-|\s)*[A-Ö][a-ö])+\s*[A-Ö][a-ö]*((-|\s)*[A-Ö][a-ö])$/,
            })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <StyledErrorParagraph role="alert">
              Oops! Namnfältet får inte vara tomt.
            </StyledErrorParagraph>
          )}
          {errors.name?.type === "maxLength" && (
            <StyledErrorParagraph role="alert">
              Oops! Namn får max vara 150 tecken.
            </StyledErrorParagraph>
          )}
          {errors.name?.type === "pattern" && (
            <StyledErrorParagraph role="alert">
              Oops! Du måste fylla i förnamn + efternamn (minst 2 bokstäver, ej
              otillåtna karaktärer).
            </StyledErrorParagraph>
          )}

          <StyledInput
            type="email"
            placeholder="E-post:"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i,
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <StyledErrorParagraph role="alert">
              {" "}
              Oops! Epost-fältet får inte vara tomt.
            </StyledErrorParagraph>
          )}
          {errors.email?.type === "pattern" && (
            <StyledErrorParagraph role="alert">
              Oops! Felaktigt epost-format.
            </StyledErrorParagraph>
          )}

          <StyledInput
            type="tel"
            placeholder="Telefonnummer:"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: true,
              pattern: /^(\+?46|0)7\d{8}$/,
            })}
            aria-invalid={errors.phoneNumber ? "true" : "false"}
          />
          {errors.phoneNumber?.type === "required" && (
            <StyledErrorParagraph role="alert">
              {" "}
              Oops! Telefonnummer-fältet får inte vara tomt.
            </StyledErrorParagraph>
          )}
          {errors.phoneNumber?.type === "pattern" && (
            <StyledErrorParagraph role="alert">
              Oops! Du behöver ange ett nummer i formatet +46705552222 alt.
              0705552222.
            </StyledErrorParagraph>
          )}

          <RowWrapper>
            <NormalButton type="submit" disabled={isSubmit}>
              Boka
            </NormalButton>
            <WarningButton type="button" onClick={handleCancel}>
              Avbryt
            </WarningButton>
          </RowWrapper>
        </ColumnWrapper>
      </form>
    </>
  );
};
