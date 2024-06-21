import { useState } from "react";

import { Loader2 } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

// specs: all possible specs for an esmeril
import esmerilSpecs from "@/data/specs.json";

// allEsmeris: all created esmeris (matches with specs above)
import allExistingEsmeris from "@/data/allEsmeris.json";

import FormRadioGroup from "@/components/FormRadioGroup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EsmerilResult from "@/components/EsmerilResult";

function App() {
  const [chosenEsmerilConfigs, setChosenEsmerilConfigs] = useState({});
  const [specificationDone, setSpecificationDone] = useState(false);
  const [esmeril, setEsmeril] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast(); // shadcn ui

  const specifyEsmeril = () => {
    // find which esmeril (from allEsmeris.json) matches chosen specs
    const matchIndex = allExistingEsmeris.findIndex(
      (esmeril) =>
        esmeril.specs.Alimentação === chosenEsmerilConfigs.Alimentação &&
        esmeril.specs.Tensão === chosenEsmerilConfigs.Tensão &&
        esmeril.specs["Proteção fixa monitorada"] ===
          chosenEsmerilConfigs["Proteção fixa monitorada"] &&
        esmeril.specs.Freio === chosenEsmerilConfigs.Freio,
    );

    if (matchIndex !== -1) {
      setEsmeril(allExistingEsmeris[matchIndex]);
    } else {
      setEsmeril(undefined);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const esmerilConfigsLength = Object.keys(chosenEsmerilConfigs).length;
    const specsLength = esmerilSpecs.length;

    if (esmerilConfigsLength === specsLength) {
      // timeout just for the UI animation.
      setTimeout(() => {
        setSpecificationDone(true);
        setIsLoading(false);
        specifyEsmeril();
      }, 1000);
    } else {
      setIsLoading(false);
      toast({
        title: "Erro",
        description: "Por favor selecione todas as especificações.",
        variant: "destructive",
      });
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <section className="min-h-[calc(100dvh-1.5rem+5rem)] animate-entrance-left">
        <div className="mx-auto sm:my-7 my-2 max-w-[75rem] px-3 sm:px-6">
          <form onSubmit={handleSubmit}>
            {esmerilSpecs.map(({ title, options, descr }) => (
              <FormRadioGroup
                key={title}
                title={title}
                options={options}
                descr={descr}
                setChosenEsmerilConfigs={setChosenEsmerilConfigs}
                specificationDone={specificationDone}
                isLoading={isLoading}
              />
            ))}
            {specificationDone ? (
              <EsmerilResult esmeril={esmeril} />
            ) : isLoading ? (
              <Button disabled className="my-4">
                Carregando... <Loader2 className="ml-3 h-4 w-4 animate-spin" />
              </Button>
            ) : (
              <Button className="my-4" type="submit">
                Especificar Motoesmeril
              </Button>
            )}
          </form>
        </div>
      </section>

      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
