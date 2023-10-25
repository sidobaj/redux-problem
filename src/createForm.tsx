import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./action";
export type FormType = {
  name: string;
  age: number;
  sex: string;
};
export default function CreateForm() {
  const [data, setData] = React.useState<FormType>();
  const dispatch = useDispatch();
  const totalData = useSelector((state: any) => state.data);
  console.log("totalData", totalData);
  const onHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((prevState: FormType | any) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addItem(data));
    console.log("data", data);
  };
  return (
    <div>
      <h1>Student Form</h1>
      <form onSubmit={onSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div>
            <label>Full Name</label>
            <input
              type={"text"}
              name="name"
              value={data?.name}
              onChange={onHandle}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type={"number"}
              name="age"
              value={data?.age}
              onChange={onHandle}
            />
          </div>
          <div>
            <label>sex</label>
            <select value={data?.sex} onChange={onHandle} name="sex">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit">submit</button>
        </div>
      </form>
      {totalData &&
        totalData.map((total: any, index: number) => {
          return (
            <div>
              <div>{total.name}</div>
              <div>{total.age}</div>
              <div>{total.sex}</div>
            </div>
          );
        })}
    </div>
  );
}

{
  /* export default createForm; */
}
