import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import {getFormData} from "../lib/utils"


function Login() {
  function handleSubmit (e) {
    e.preventDefault()
  const data =  getFormData(e.target)
  }
  return (
    <div className="flex h-full items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-96 w-full px-2">
        <div>
          <Label htmlFor="username">Ismingizni Kiriting</Label>
          <Input name="username" id="username" type="text" placeholder="Asadbek" />
        </div>

        <div>
          <Label htmlFor="password">Parolingizni Kiriting Kiriting</Label>
          <Input name="password" id="password" type="password" placeholder="22$s39#" />
        </div>

        <div>
          <Button className="w-full" type="submit">
            {" "}
            Kirish
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
