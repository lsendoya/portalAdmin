import {toggleStore} from '@/app/store/toggleStore';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from '@/components/ui/dialog';
import {UpdateForm} from '@/components/ui/products/update-form';

export function DialogUpdateProduct() {
  const toggle = toggleStore((state) => state.toggleUpdate);
  const setToggle = toggleStore((state) => state.setToggleUpdate);

  const openDialog = () => {
    setToggle();
  };

  return (
    <Dialog open={toggle} defaultOpen={false} onOpenChange={openDialog}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center   ">Editar Producto</DialogTitle>
        </DialogHeader>
        <UpdateForm />
      </DialogContent>
    </Dialog>
  );
}
