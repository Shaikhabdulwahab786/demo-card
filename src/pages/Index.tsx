"use client";
import { productData } from "@/data/productData";
import { ProductPreview } from "@/components/ProductPreview";
import HeaderPage from "./headerPage";
import TrustedSection from "./TrustedSection";
const Index = () => {
  return (
    <main>
      {/* Header */}
      <header className="animate-fade-in">
        <HeaderPage />
      </header>
      {/* subHeader */}
      <div className="text-center mt-14 mb-14 animate-fade-in">
        <h1 className=" text-6xl md:text-8xl inline font-bold bg-gradient-to-r from-honey-light via-honey-medium to-honey-dark bg-clip-text text-transparent  mb-4">
          Hedamo
        </h1>
        <p className="md:text-xl text-sm   text-muted-foreground">
          Premium Organic Products
        </p>
      </div>
      <div>
        <TrustedSection />
      </div>
      <div className="text-center my-12">
        {/* Title with fade + slide animation */}
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-honey-medium to-honey-dark font-mono bg-clip-text text-transparent animate-fade-in">
          Products
        </h2>

        {/* Underline grows from left */}
        <div className="mt-2 h-1 w-24 bg-honey-dark mx-auto rounded-full animate-growLine animate-fade-in"></div>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-2 items-stretch">
        {productData.map((data) => (
          <div key={data.id}>
            <ProductPreview key={data.id} products={data} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Index;
