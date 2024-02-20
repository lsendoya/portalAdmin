'use client';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from '@/components/ui/dialog';
import {CreateForm} from '@/components/ui/products/create-form';
import {toggleStore} from '@/app/store/toggleStore';

export function DialogCreateProduct() {
  const toggle = toggleStore((state) => state.toggleCreate);
  const setToggle = toggleStore((state) => state.setToggleCreate);

  const openDialog = () => {
    setToggle();
  };

  return (
    <Dialog open={toggle} defaultOpen={false} onOpenChange={openDialog}>
      <DialogTrigger asChild>
        <Button className={'font-semibold'} variant="outline">
          Crear Producto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center   ">Crear Producto</DialogTitle>
        </DialogHeader>

        <CreateForm />
      </DialogContent>
    </Dialog>
  );
}
