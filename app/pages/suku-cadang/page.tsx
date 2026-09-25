import SparepartHeader from "./component/SparepartHeader";
import SparepartCatalog from "./component/SparepartCatalog";
import SparepartAssurance from "./component/SparepartAssurance";

export default function SparepartPage() {
  return (
    <main className="w-full pt-[116px] bg-background min-h-screen">
      <div className="flex flex-col w-full">
        <SparepartHeader />

        <SparepartCatalog />

        <SparepartAssurance />
      </div>
    </main>
  );
}
