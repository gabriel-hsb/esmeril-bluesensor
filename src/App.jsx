import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ThemeProvider } from "@/components/theme-provider";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <div>
          <h1 className="text-3xl text-emerald-600">Hello World</h1>
          <Button className="hover:bg-main-blue">Button do shadcn</Button>

          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
