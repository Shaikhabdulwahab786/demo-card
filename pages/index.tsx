import { useState } from "react";
import { ProductPreview } from "@/components/ProductPreview";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";
import { GetStaticProps } from 'next';

interface HomeProps {
  // Add any props you might want to pass from getStaticProps
}

const Home = ({}: HomeProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ProductPreview onViewDetails={() => setIsModalOpen(true)} />
      <ProductDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // You can fetch product data here if needed
  return {
    props: {},
  };
};

export default Home;