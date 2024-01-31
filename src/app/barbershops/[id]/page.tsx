import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";

interface BarberShopDetailsPageProps {
  params: {
    id?: string;
  }
}

const BarberShopDetailsPage = async ({ params }: BarberShopDetailsPageProps) => {
  if (!params.id) { return null }
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    }
  })
  if (!barbershop) { return null }
  return (

  );
}

export default BarberShopDetailsPage;
