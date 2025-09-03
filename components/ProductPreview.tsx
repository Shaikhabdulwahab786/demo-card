import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";
import { productData } from "@/data/productData";
import Image from "next/image";

interface ProductPreviewProps {
  onViewDetails: () => void;
}

export const ProductPreview = ({ onViewDetails }: ProductPreviewProps) => {
  return (
    <div className="min-h-screen bg-gradient-honey flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Hedamo
          </h1>
          <p className="text-xl text-muted-foreground">
            Premium Organic Products
          </p>
        </div>

        {/* Product Preview Card */}
        <Card className="bg-card/90 backdrop-blur-sm shadow-honey border-earth-light hover:shadow-hover transition-all duration-500 overflow-hidden animate-scale-in">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-earth rounded-2xl p-8 flex items-center justify-center">
                <Image 
                  src="/images/honey-jar.jpg"
                  alt="Hedamo Organic Honey"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 animate-float"
                  priority
                />
              </div>
              <Badge className="absolute top-4 left-4 bg-honey-medium text-primary-foreground">
                Premium Quality
              </Badge>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {productData.category}
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {productData.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  {productData.shortDescription}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(productData.rating) 
                          ? 'fill-honey-medium text-honey-medium' 
                          : 'text-earth-medium'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {productData.rating} ({productData.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-primary">
                {productData.price}
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3">
                {productData.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{feature.icon}</span>
                    <span className="text-muted-foreground">{feature.title}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                onClick={onViewDetails}
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
    </div>
  );
};