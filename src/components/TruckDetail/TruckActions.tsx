
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import PriceQuoteDialog from '@/components/PriceQuoteDialog';
import { useCompare } from '@/contexts/CompareContext';
import { Truck } from '@/models/TruckTypes';
import CompareButton from '@/components/CompareButton';

interface TruckActionsProps {
  truck: Truck;
}

const TruckActions = ({ truck }: TruckActionsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <PriceQuoteDialog
        productName={truck.name}
        trigger={
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 flex-1">
            Nhận báo giá
          </Button>
        }
      />
      
      <a 
        href="tel:0764678901" 
        className="flex-1"
      >
        <Button 
          variant="outline" 
          size="lg"
          className="border-primary text-primary hover:bg-primary/10 w-full"
        >
          <Phone className="mr-2 h-4 w-4" />
          0764 678 901
        </Button>
      </a>
      
      <CompareButton 
        truck={truck} 
        variant="secondary" 
        size="lg"
        className="flex-1"
        showCompareNow={true}
      />
    </div>
  );
};

export default TruckActions;
