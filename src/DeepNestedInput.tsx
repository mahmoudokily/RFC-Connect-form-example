import { ConnectForm } from "./ConnectForm";

export const DeepNest = () => {
  const priceArr = ["ac_energy", "ac-flat", "ac-time", "ac-parkink"];

  return (
    <ConnectForm>
      {({ register, formState: { errors } }: any) => {
        return priceArr.map((item: string, index: number) => (
          <div key={index} style={{ display: "block" }}>
            <input
              {...register(item, {
                required: { value: true, message: "required" }
              })}
              placeholder={item}
            />
            {errors[item] && <span role="alert">{errors[item]?.message}</span>}
          </div>
        ));
      }}
    </ConnectForm>
  );
};
