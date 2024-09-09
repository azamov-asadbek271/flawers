import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { getFormData } from "../lib/utils";
import { login } from "../request";
import { UpdateIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";
import { useAppStore } from "../lib/suzand";

function Login() {
  const [loading, setLoading] = useState();
  const setAdmin = useAppStore((state) => state.setAdmin);
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    setLoading(true);
    login(data)
      .then((res) => {
        setAdmin(res);
        toast.success("login bo'ldingiz");
      })
      .catch((message) => toast.error(message))
      .finally(() => setLoading(false));
  }
  return (
    <div className="flex h-full items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-96 flex-col gap-5 px-2"
      >
        <div>
          <Label htmlFor="username">Ismingizni Kiriting</Label>
          <Input
            name="username"
            id="username"
            type="text"
            placeholder="Asadbek"
          />
        </div>

        <div>
          <Label htmlFor="password">Parolingizni Kiriting Kiriting</Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="22$s39#"
          />
        </div>

        <div>
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? (
              <>
                Yuklanmoqda
                <UpdateIcon className="ml-2 animate-spin" />
              </>
            ) : (
              "Kirish"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
