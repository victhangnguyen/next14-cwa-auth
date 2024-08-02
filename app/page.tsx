import { Button } from "@/components/ui/button";

export default async function Home() {
  const users = await db.collection("users").get();

  return <ClientComponent data={users}></ClientComponent>;

  return (
    <main className="font-semibold text-green-500">
      <Button size={"lg"} variant={"custom"}>
        Click me
      </Button>
    </main>
  );
}
