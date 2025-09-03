import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, X, MapPin, Award, Leaf, } from "lucide-react";
import { Product } from "@/data/productInter";
import { useIsMobile } from "@/hooks/use-mobile"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle,  } from "./ui/drawer";

interface ProductDetailsModalProps {
  onClose: () => void;
  productDetails: Product;
  open:boolean
}

export const ProductDetailsModal = ({
  productDetails,
  onClose,
  open
}: ProductDetailsModalProps) => {
   const isDesktop = useIsMobile("(min-width: 768px)")
   if (!isDesktop) {
  return (
    <Dialog  key={productDetails.id} open={open} onOpenChange={onClose}>
      <DialogContent className={`max-w-[95vw] max-h-[90vh] flex flex-col
          w-full ${open ? "animate-dialog-open" : "animate-dialog-close"}`} >
        <DialogHeader className="border-b border-border pb-4">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                {productDetails.name}
              </DialogTitle>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(productDetails.rating)
                          ? "fill-honey-medium text-honey-medium"
                          : "text-earth-medium"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {productDetails.rating} ({productDetails.reviewCount}{" "}
                    reviews)
                  </span>
                </div>
                <Badge variant="secondary">{productDetails.category}</Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-4  space-y-6 py-6">
          {/* Product Overview Card */}
          <Card className="p-6 bg-gradient-honey border-earth-light">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-1">
                <img
                  src={productDetails.image}
                  alt={productDetails.name}
                  className="w-full max-w-xs mx-auto object-contain rounded-lg"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-xl font-semibold">Product Overview</h3>
                <p className="text-muted-foreground">
                  {productDetails.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {productDetails.price}
                </div>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full  grid-cols-5 bg-earth-light">
              <TabsTrigger className=" text-honey-dark text-xs md:text-base" value="features">Features</TabsTrigger>
              <TabsTrigger className=" text-honey-dark text-xs md:text-base" value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger className=" text-honey-dark text-xs md:text-base" value="traceability">Traceability</TabsTrigger>
              <TabsTrigger className=" text-honey-dark text-xs md:text-base" value="reviews">Reviews</TabsTrigger>
              <TabsTrigger className=" text-honey-dark text-xs md:text-base" value="sustainability">Sustainability</TabsTrigger>
            </TabsList>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {productDetails.features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-6 shadow-card hover:shadow-hover transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
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
                  {productDetails.usage.map((use, index) => (
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
                  <h4 className="font-semibold text-lg mb-4">
                    Nutrition Facts
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Serving Size</span>
                      <span className="font-medium">
                        {productDetails.nutrition.servingSize}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Calories</span>
                      <span>{productDetails.nutrition.calories}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Fat</span>
                        <span>{productDetails.nutrition.totalFat}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sodium</span>
                        <span>{productDetails.nutrition.sodium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Carbs</span>
                        <span>{productDetails.nutrition.totalCarbs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sugar</span>
                        <span>{productDetails.nutrition.sugar}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein</span>
                        <span>{productDetails.nutrition.protein}</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="space-y-4">
                  <Card className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Vitamins</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {productDetails.nutrition.vitamins.map(
                        (vitamin, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="justify-center"
                          >
                            {vitamin}
                          </Badge>
                        )
                      )}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Minerals</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {productDetails.nutrition.minerals.map(
                        (mineral, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="justify-center"
                          >
                            {mineral}
                          </Badge>
                        )
                      )}
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
                      <p className="text-muted-foreground">
                        {productDetails.traceability.origin}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Harvest Date:</span>
                      <p className="text-muted-foreground">
                        {productDetails.traceability.harvestDate}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Batch Number:</span>
                      <p className="text-muted-foreground">
                        {productDetails.traceability.batchNumber}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Beekeepers:</span>
                      <p className="text-muted-foreground">
                        {productDetails.traceability.beekeepers}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Processing:</span>
                      <p className="text-muted-foreground">
                        {productDetails.traceability.processing}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-honey-medium" />
                    Certifications
                  </h4>
                  <div className="space-y-2">
                    {productDetails.traceability.certifications.map(
                      (cert, index) => (
                        <Badge
                          key={index}
                          className="bg-honey-light text-honey-dark mr-2 mb-2"
                        >
                          {cert}
                        </Badge>
                      )
                    )}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-4">
              <div className="space-y-4">
                {productDetails.reviews.map((review) => (
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
                                    ? "fill-honey-medium text-honey-medium"
                                    : "text-earth-medium"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
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
                {Object.entries(productDetails.sustainability).map(
                  ([key, value], index) => (
                    <Card key={index} className="p-6">
                      <h4 className="font-semibold text-lg mb-3 capitalize flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-honey-medium" />
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </h4>
                      <p className="text-muted-foreground">{value}</p>
                    </Card>
                  )
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
  return (
    <Drawer key={productDetails.id} open={open} onOpenChange={onClose}>
      <DrawerContent className="flex flex-col max-h-[90vh] ">
        <DrawerHeader className="text-left">
          <DrawerTitle>{productDetails.name}</DrawerTitle>
        </DrawerHeader>
         <div className="flex-1 overflow-y-auto px-4 space-y-6 mt-8 mb-8 ">
          {/* Product Overview Card */}
          <Card className="p-4 bg-gradient-honey border-earth-light">
            <div className="grid grid-cols-1 gap-2 items-center">
              <div className="md:col-span-1">
                <img
                  src={productDetails.image}
                  alt={productDetails.name}
                  className="w-full max-w-xs mx-auto object-contain rounded-lg"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-xl font-semibold">Product Overview</h3>
                <p className="text-muted-foreground">
                  {productDetails.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {productDetails.price}
                </div>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full  grid-cols-5  bg-earth-light">
              <TabsTrigger className=" text-honey-dark text-xs md:text-base" value="features">Features</TabsTrigger>
              <TabsTrigger className=" text-honey-dark text-xs md:text-base" value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger className=" text-honey-dark text-xs md:text-base" value="traceability">Traceability</TabsTrigger>
              <TabsTrigger className=" text-honey-dark text-xs md:text-base" value="reviews">Reviews</TabsTrigger>
              <TabsTrigger className=" text-honey-dark text-xs md:text-base" value="sustainability">Sustainability</TabsTrigger>
            </TabsList>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-4 h-full">
              <div className="grid grid-cols-1 gap-3">
                {productDetails.features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-4 shadow-card hover:shadow-hover transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-4 bg-earth-light">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-honey-medium" />
                  Usage Suggestions
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {productDetails.usage.map((use, index) => (
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
              <div className="grid grid-cols-1 gap-2">
                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-4">
                    Nutrition Facts
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Serving Size</span>
                      <span className="font-medium">
                        {productDetails.nutrition.servingSize}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Calories</span>
                      <span>{productDetails.nutrition.calories}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Fat</span>
                        <span>{productDetails.nutrition.totalFat}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sodium</span>
                        <span>{productDetails.nutrition.sodium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Carbs</span>
                        <span>{productDetails.nutrition.totalCarbs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sugar</span>
                        <span>{productDetails.nutrition.sugar}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein</span>
                        <span>{productDetails.nutrition.protein}</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold text-lg mb-4">Vitamins</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {productDetails.nutrition.vitamins.map(
                        (vitamin, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="justify-center"
                          >
                            {vitamin}
                          </Badge>
                        )
                      )}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Minerals</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {productDetails.nutrition.minerals.map(
                        (mineral, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="justify-center"
                          >
                            {mineral}
                          </Badge>
                        )
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Traceability Tab */}
            <TabsContent value="traceability" className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-honey-medium" />
                    Origin & Processing
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Origin:</span>
                      <p className="text-muted-foreground">
                        {productDetails.traceability.origin}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Harvest Date:</span>
                      <p className="text-muted-foreground">
                        {productDetails.traceability.harvestDate}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Batch Number:</span>
                      <p className="text-muted-foreground">
                        {productDetails.traceability.batchNumber}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Beekeepers:</span>
                      <p className="text-muted-foreground">
                        {productDetails.traceability.beekeepers}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium">Processing:</span>
                      <p className="text-muted-foreground">
                        {productDetails.traceability.processing}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-honey-medium" />
                    Certifications
                  </h4>
                  <div className="space-y-2">
                    {productDetails.traceability.certifications.map(
                      (cert, index) => (
                        <Badge
                          key={index}
                          className="bg-honey-light text-honey-dark mr-2 mb-2"
                        >
                          {cert}
                        </Badge>
                      )
                    )}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-4">
              <div className="space-y-4">
                {productDetails.reviews.map((review) => (
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
                                    ? "fill-honey-medium text-honey-medium"
                                    : "text-earth-medium"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Sustainability Tab */}
            <TabsContent value="sustainability" className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(productDetails.sustainability).map(
                  ([key, value], index) => (
                    <Card key={index} className="p-4">
                      <h4 className="font-semibold text-lg mb-3 capitalize flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-honey-medium" />
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </h4>
                      <p className="text-muted-foreground">{value}</p>
                    </Card>
                  )
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
};
