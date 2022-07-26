import React from "react";

/**Com os ": React.FC" eu defino o tipo como "React Function Component",
 * dentro das "<>" eu posso passar as propriedades que ele vai receber, pode ser direto: "<{nome: string}>"
 * ou com uma "interface" nomeada, que é o que foi feito.*/

/** "?" torna a propriedade não obrigatória
 */
interface Person {
  firstName: string;
  lastName?: string;
}
interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn: (bob: string) => number;
  obj?: {
    f1: string;
  };
  person: Person;
  nossa: TextNode;
}

interface TextNode {
  gato: string;
}

export const TextField: React.FC<Props> = ({ ...Props }) => {
  // estou definindo que o estado pode assumir "number", OU = " | " null, ou "undefinded" (são coisas diferentes)
  const [count, setCount] = React.useState<number | null | undefined>(5);
  const [bla, setBla] = React.useState<{ text: string }>({ text: "blabla" });
  const [fala, setFala] = React.useState<string>("");
  const [gatin, setGatin] = React.useState<TextNode | null>(null);
  //o parêntesis vazio é "undefined" e o ref não aceita isso, por isso precisa no "null"
  const inputRef = React.useRef<HTMLInputElement>(null);

  // setCount(null);
  // setGatin("Mila");
  React.useEffect(() => {
    setGatin(Props.nossa);
    console.log(Props);
    console.log(Props.nossa);
  }, []);

  const res = Props.fn(Props.person.firstName);

  return (
    <div>
      <p>{res} TextField</p> {Props.person.firstName}{" "}
      <input
        ref={inputRef}
        value={fala}
        onChange={(e) => {
          setFala(e.target.value);
          console.log(e.target.value);
        }}
      />
      <p>{gatin && gatin.gato}</p>
      <p>
        {Props.person.firstName} {Props.person.lastName}
        {" disse: "}
        {bla.text}
        {" e: "}
        {fala}
      </p>
    </div>
  );
};
