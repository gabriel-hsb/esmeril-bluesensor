import { useState } from "react";
import specs from "@/data/specs.json";
import allEsmeris from "@/data/allEsmeris.json";

import { ThemeProvider } from "@/components/theme-provider";

import Header from "./components/Header";
import Footer from "./components/Footer";

import FormRadioGroup from "./components/FormRadioGroup";
import { Button } from "./components/ui/button";

import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

import SpecificiedEsmeril from "./components/SpecificiedEsmeril";

import { Loader2 } from "lucide-react";

function App() {
  const [esmerilConfigs, setEsmerilConfigs] = useState({});
  const [specified, setSpecified] = useState(false);
  const [esmeril, setEsmeril] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const specifyEsmeril = () => {
    const matchIndex = allEsmeris.findIndex(
      (esmeril) =>
        esmeril.specs.Alimentação === esmerilConfigs.Alimentação &&
        esmeril.specs.Tensão === esmerilConfigs.Tensão &&
        esmeril.specs["Proteção fixa monitorada"] ===
          esmerilConfigs["Proteção fixa monitorada"] &&
        esmeril.specs.Freio === esmerilConfigs.Freio,
    );

    if (matchIndex !== -1) {
      setEsmeril(allEsmeris[matchIndex]);
      return allEsmeris[matchIndex];
    } else {
      setEsmeril(undefined);
    }
  };

  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const esmerilConfigsLength = Object.keys(esmerilConfigs).length;
    const specsLength = specs.length;

    if (esmerilConfigsLength !== specsLength) {
      setIsLoading(false);
      toast({
        title: "Erro",
        description: "Por favor selecione todas as especificações.",
        variant: "destructive",
      });
    } else {
      setTimeout(() => {
        setSpecified(true);
        setIsLoading(false);
        specifyEsmeril();
      }, 1000);
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <section className="animate-entrance-left min-h-[calc(100dvh-1.5rem+5rem)]">
        <div className="mx-auto my-7 max-w-[75rem] px-6">
          <form onSubmit={handleSubmit}>
            {specs.map(({ title, options, descr }) => (
              <FormRadioGroup
                key={title}
                title={title}
                options={options}
                descr={descr}
                setEsmerilConfigs={setEsmerilConfigs}
                specified={isLoading}
                // TODO: disabled when loading && specified
              />
            ))}
            {specified ? (
              <SpecificiedEsmeril esmeril={esmeril} />
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
