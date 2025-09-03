"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";
import { Product } from "@/data/productInter";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";
import { useState } from "react";
interface productsPreviewProps {
  products: Product;
}

export const ProductPreview = ({ products }: productsPreviewProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState<boolean | null>(false);
  const onClick = (productData: Product) => {
    setSelectedProduct(productData);
    setIsOpen(true);
    console.log(isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };
  return (
    <div className=" min-h-[500px] flex items-center justify-center p-4">
      {selectedProduct && (
        <ProductDetailsModal
          productDetails={selectedProduct}
          open={isOpen}
          onClose={handleClose}
        />
      )}
        {/* products Preview Card */}
        <Card
          key={products.id}
          className="bg-card/90 w-full h-auto backdrop-blur-sm shadow-honey border-earth-light hover:shadow-hover transition-all duration-500 overflow-hidden animate-scale-in"
        >
          <div className="grid grid-cols-1 gap-8 p-8">
            {/* products Image */}
            <div className="relative group">
              <div className=" aspect-square bg-gradient-honey rounded-2xl p-2 flex items-center justify-center">
                <img
                  src={products.image}
                  alt={products.name}
                  loading="lazy"
                  className=" w-full h-full text-center rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500 "
                />
              </div>
              <Badge className="absolute top-4 left-4 bg-honey-medium text-primary-foreground">
                Premium Quality
              </Badge>
            </div>

            {/* products Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {products.category}
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-2 line-clamp-1">
                  {products.name}
                </h2>
                <p className="text-lg text-muted-foreground line-clamp-1 mb-4">
                  {products.shortDescription}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(products.rating)
                          ? "fill-honey-medium text-honey-medium"
                          : "text-earth-medium"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {products.rating} ({products.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-primary">
                {products.price}
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3">
                {products.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{feature.icon}</span>
                    <span className="text-muted-foreground">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <Button
                onClick={() => onClick(products)}
                size="lg"
                className="bg-gradient-warm hover:shadow-hover transition-all duration-300 group"
              >
                Know More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
  );
};
