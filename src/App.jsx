import { useState } from "react";

import { ThemeProvider } from "@/components/theme-provider";

import Header from "./components/Header";
import Footer from "./components/Footer";

import FormRadioGroup from "./components/FormRadioGroup";
import { Button } from "./components/ui/button";

function App() {
  const [esmerilConfigs, setEsmerilCongigs] = useState([]);
  const [specified, setSpecified] = useState(false);

  const specs = [
    {
      title: "Alimentação",
      descr: "Será utilizada para alimentar o painel elétrico e o motor.",
      options: [
        {
          name: "Monofásico",
          value: "mono",
        },
        {
          name: "Trifásico",
          value: "tri",
        },
      ],
    },
    {
      title: "Tensão",
      descr: "Utilizada para alimentar o painel elétrico e o motor.",
      options: [
        {
          name: "220V",
          value: "220",
        },
        {
          name: "380V",
          value: "380",
        },
        {
          name: "440V",
          value: "440",
        },
      ],
    },
    {
      title: "Proteção fixa monitorada",
      descr: "Proteção de poliborcabonato. Desliga esmeril quando levantada.",
      options: [
        {
          name: "Sim",
          value: "monitorada",
        },
        {
          name: "Não",
          value: "sem monitorada",
        },
      ],
    },
    {
      title: "Freio",
      descr:
        "Inversor WEG CFW500 é utilizado para frear. Maior impacto no valor da venda final.",
      options: [
        {
          name: "Com freio",
          value: "freio",
        },
        {
          name: "Sem freio",
          value: "sem freio",
        },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpecified(true);

    console.log(esmerilConfigs);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="h-[calc(100dvh-1.5rem+5rem)]">
        <section className="mx-auto my-7 max-w-[75rem] px-6">
          <form onSubmit={handleSubmit}>
            {specs.map(({ title, options, descr }, idx) => (
              <FormRadioGroup
                key={idx}
                title={title}
                options={options}
                descr={descr}
                setEsmerilCongigs={setEsmerilCongigs}
                specified={specified}
              />
            ))}
            <Button className="my-4" type="submit">
              Especificar Motoesmeril
            </Button>
          </form>
        </section>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
