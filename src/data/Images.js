import prod1 from '../images/image-product-1.jpg'
import prod2 from '../images/image-product-2.jpg'
import prod3 from '../images/image-product-3.jpg'
import prod4 from '../images/image-product-4.jpg'

import prodThumb1 from '../images/image-product-1-thumbnail.jpg'
import prodThumb2 from '../images/image-product-2-thumbnail.jpg'
import prodThumb3 from '../images/image-product-3-thumbnail.jpg'
import prodThumb4 from '../images/image-product-4-thumbnail.jpg'

export const data = {
    products: [
        {
            'id': '1',
            'title': 'Fall Limited Edition Sneakers',
            'src': [ prod1 , prod2 , prod3 , prod4 ],
            'thumsrc': [ prodThumb1, prodThumb2, prodThumb3, prodThumb4 ],
            'price': 125.00,
            'count': 1
        }
    ]
}