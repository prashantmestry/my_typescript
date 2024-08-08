import { FC, useState } from "react";

interface HomeProps {
  name: string;
}

const Home: FC<HomeProps> = ({ name }) => {
  const [userName, setUserName] = useState<String>("");

  const handleChagne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <div>{name}</div>
      <div>Count:{userName}</div>
      <input type="text" placeholder="Enter" onChange={handleChagne} />
    </div>
  );
};

export default Home;
