import { Button } from "./ui/button";
import EsmerilListItem from "./esmerilResults/EsmerilListItem";

import { FileText, MessagesSquare, Timer } from "lucide-react";

const EsmerilResult = ({ esmeril }) => {
  const restart = () => {
    location.reload();
    window.scrollTo(0, 0);
  };

  if (esmeril) {
    const { projectLink, code, descr, price } = esmeril;

    return (
      <section className="mt-16 animate-entrance-left text-base sm:text-lg">
        <ul className="mb-6 flex w-fit flex-col gap-1 rounded-lg border-y border-l py-1 pl-2">
          <EsmerilListItem title={"Código"} value={code} />
          <EsmerilListItem title={"Descrição"} value={descr} />
          <EsmerilListItem title={"Descrição"} value={descr} />

          {/* TODO: modify component to work with list item below */}

          <li className="mb-1 w-full border-b p-1">
            <span className="text-muted-foreground">Preço custo: </span>
            {price ? (
              <span className="text-lg sm:text-xl">{price}</span>
            ) : (
              <span className="text-lg text-red-500 dark:text-red-200 sm:text-xl">
                Valor ainda não definido
              </span>
            )}
          </li>
          <li className="mb-1 w-full p-1">
            <span className="text-muted-foreground">
              Todos modelos de Motoesmeril acompanham:
            </span>
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>Motoesmeril com pedra (marca Motomil)</li>
              <li>Tomada + Plugue Famatel</li>
              <li>Proteção fixa de acrílico</li>
              <li>Componentes WEG</li>
            </ul>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          {projectLink ? (
            <Button asChild className="cursor-pointer">
              <a href={projectLink} target="_blank">
                Ver Projeto <FileText className="ml-2 size-4" />
              </a>
            </Button>
          ) : (
            <div className="flex items-center gap-4">
              <Button variant="outline" disabled className="text-white">
                Projeto em andamento <Timer className="ml-2 size-4" />
              </Button>
              <Button asChild>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=15991254967"
                >
                  Solicitar projeto <MessagesSquare className="ml-2 size-5" />
                </a>
              </Button>
            </div>
          )}
        </div>
        <Button variant="outline" className="mb-8 mt-16" onClick={restart}>
          Reiniciar
        </Button>
      </section>
    );
  } else {
    return (
      <section className="animate-entrance-left">
        <p className="mb-8 text-red-500 dark:text-red-200">
          Desculpe, esse modelo de Motoesmeril ainda não foi criado
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=15991254967"
            >
              Solicitar modelo <MessagesSquare className="ml-2 size-5" />
            </a>
          </Button>
          <Button variant="outline" onClick={restart}>
            Reiniciar
          </Button>
        </div>
      </section>
    );
  }
};

export default EsmerilResult;
