import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, X, MapPin, Award, Leaf } from "lucide-react";
import { productData } from "@/data/productData";
import Image from "next/image";

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailsModal = ({ isOpen, onClose }: ProductDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader className="border-b border-border pb-4">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                {productData.name}
              </DialogTitle>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(productData.rating) 
                          ? 'fill-honey-medium text-honey-medium' 
                          : 'text-earth-medium'
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {productData.rating} ({productData.reviewCount} reviews)
                  </span>
                </div>
                <Badge variant="secondary">{productData.category}</Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-6">
          {/* Product Overview Card */}
          <Card className="p-6 bg-gradient-honey border-earth-light">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-1">
                <Image 
                  src="/images/honey-jar.jpg"
                  alt={productData.name}
                  width={300}
                  height={300}
                  className="w-full max-w-xs mx-auto object-contain rounded-lg"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-xl font-semibold">Product Overview</h3>
                <p className="text-muted-foreground">{productData.description}</p>
                <div className="text-2xl font-bold text-primary">{productData.price}</div>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-earth-light">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="traceability">Traceability</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            </TabsList>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {productData.features.map((feature, index) => (
                  <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-shadow">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <Card className="p-6 bg-earth-light">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-honey-medium" />
                  Usage Suggestions
                </h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {productData.usage.map((use, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-honey-medium rounded-full"></span>
                      {use}
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>

            {/* Nutrition Tab */}
            <TabsContent value="nutrition" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-4">Nutrition Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Serving Size</span>
                      <span className="font-medium">{productData.nutrition.servingSize}</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Calories</span>
                      <span>{productData.nutrition.calories}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Fat</span>
                        <span>{productData.nutrition.totalFat}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sodium</span>
                        <span>{productData.nutrition.sodium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Carbs</span>
                        <span>{productData.nutrition.totalCarbs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sugar</span>
                        <span>{productData.nutrition.sugar}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein</span>
                        <span>{productData.nutrition.protein}</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="space-y-4">
                  <Card className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Vitamins</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {productData.nutrition.vitamins.map((vitamin, index) => (
                        <Badge key={index} variant="secondary" className="justify-center">
                          {vitamin}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Minerals</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {productData.nutrition.minerals.map((mineral, index) => (
                        <Badge key={index} variant="secondary" className="justify-center">
                          {mineral}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Traceability Tab */}
            <TabsContent value="traceability" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-honey-medium" />
                    Origin & Processing
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Origin:</span>
                      <p className="text-muted-foreground">{productData.traceability.origin}</p>
                    </div>
                    <div>
                      <span className="font-medium">Harvest Date:</span>
                      <p className="text-muted-foreground">{productData.traceability.harvestDate}</p>
                    </div>
                    <div>
                      <span className="font-medium">Batch Number:</span>
                      <p className="text-muted-foreground">{productData.traceability.batchNumber}</p>
                    </div>
                    <div>
                      <span className="font-medium">Beekeepers:</span>
                      <p className="text-muted-foreground">{productData.traceability.beekeepers}</p>
                    </div>
                    <div>
                      <span className="font-medium">Processing:</span>
                      <p className="text-muted-foreground">{productData.traceability.processing}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-honey-medium" />
                    Certifications
                  </h4>
                  <div className="space-y-2">
                    {productData.traceability.certifications.map((cert, index) => (
                      <Badge key={index} className="bg-honey-light text-honey-dark mr-2 mb-2">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-4">
              <div className="space-y-4">
                {productData.reviews.map((review) => (
                  <Card key={review.id} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.author}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${
                                  i < review.rating 
                                    ? 'fill-honey-medium text-honey-medium' 
                                    : 'text-earth-medium'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Sustainability Tab */}
            <TabsContent value="sustainability" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(productData.sustainability).map(([key, value], index) => (
                  <Card key={index} className="p-6">
                    <h4 className="font-semibold text-lg mb-3 capitalize flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-honey-medium" />
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-muted-foreground">{value}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};