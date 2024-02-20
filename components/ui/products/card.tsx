import {Product} from '@/utils/types/product';
import {CarouselProduct} from '@/components/ui/products/carousel';
import {Card, CardContent, CardFooter, CardHeader,} from '@/components/ui/card';
import {useSelectProduct} from '@/app/hooks/useProduct';

interface Props {
  product: Product;
  index: number;
}
export function CardProduct({ product, index }: Props) {
  const { handleEdit } = useSelectProduct(index);
  return (
    <Card
      className={
        'bg-white rounded-lg max-w-80  min-w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-4'
      }
    >
      <div className={'flex justify-between items-center p-2 border-b'}>
        <div>
          <button
            onClick={() => handleEdit(product.id)}
            className={
              'text-yellow-700 hover:text-yellow-900 transition-colors duration-150 ease-in-out p-2 rounded-full focus:outline-none focus:ring-2  focus:ring-opacity-50'
            }
          >
            <svg className="w-5 h-5">
              <use href={`/action-icons.svg#icon-edit`}></use>
            </svg>
          </button>
        </div>

        <div
          className={
            'text-red-700 hover:text-red-900 transition-colors duration-150 ease-in-out p-2 rounded-full focus:outline-none focus:ring-2  focus:ring-opacity-50'
          }
        >
          <button>
            <svg className="w-5 h-5">
              <use href={`/action-icons.svg#icon-trash`}></use>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <CardHeader className={'py-2'}>
          <h2 className={'text-xl font-bold text-gray-800 text-center'}>
            {product.name}
          </h2>
        </CardHeader>
        <CardContent>
          <CarouselProduct name={product.name} links={product.imageURLS} />
          <div className={'h-auto pb-4'}>
            <p
              className={
                'text-justify text-sm md:truncate  hover:whitespace-normal'
              }
            >
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-base font-medium text-gray-800">
              {new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
              }).format(product.price)}
            </span>

            <span
              className={`font-semibold ${product.available ? 'text-green-600' : 'text-red-600'}`}
            >
              {isAvailable(product.available)}
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <div className="p-4 bg-gray-50">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    {Object.entries(product.size).map(([sizeKey], index) => (
                      <th
                        key={`th-${index}`}
                        className="px-4 py-4 text-left text-xs font-semibold text-gray-600 uppercase"
                      >
                        {sizeKey.replace(/^SIZE/i, '').replace(/_/g, '-')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    {Object.entries(product.size).map(
                      ([sizeKey, sizeValue], index) => (
                        <td
                          key={`td-${index}`}
                          className={`px-4 py-2 text-sm font-semibold ${sizeValue <= 0 ? 'text-red-600' : 'text-green-600'}`}
                        >
                          {sizeValue}
                        </td>
                      )
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

function isAvailable(value: boolean) {
  if (value) return 'Disponible';
  return 'No Disponible';
}
