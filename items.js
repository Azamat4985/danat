const posts = [];

const images = [
    'https://media.istockphoto.com/photos/yurt-at-the-silk-road-picture-id523459293?k=20&m=523459293&s=612x612&w=0&h=M-iWbe33jGFGXZkm37rxVFA_HutfVsO1rkADWJ7gKvc=',
    'https://images.rove.me/w_1920,q_85/okgeqwtgto4llxut06rn/kazakhstan-lake-kaindy.jpg',
    'https://3pulse.com/uploads/photo/01/80/28/2016/08/17/e3d1237066.jpg',
    'https://asiasociety.org/sites/default/files/styles/1200w/public/2020-06/Kazakhstan%20Key%20Visual%20NEW.jpg',
    'https://www.jartour.ru/_/images/items/tours/149/thmbs/og_003.jpeg',
    'https://s3-eu-west-1.amazonaws.com/s3.mediazona.ca/entry/d6bc8cc743d08b787cc03efe45c1c7e3_1400x850',
    'https://34travel.me/media/upload/images/2017/may/almaty/Depositphotos_204264664_l-2015.jpg'
]

let imageIndex = 0;

for(let i = 0; i < 10; i++) {
    let item = {
        id: i, 
        title: `en ademi jer. ${i}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if(imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)