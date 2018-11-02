//测试二
//promise 有三种状态 pending  fulfiled  rejected   状态改变只能从pending 到fulfilled 或者pending到rejected，状态一旦改变则不能再变

const Promise =require('./index');
{
    console.log('------------------测试二------------------');
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('success');
        },1000)
    })

    const promise2 =new Promise((resolve,reject)=>{
        throw new Error('error!!!');
    })

    console.log('promise1',promise1);
    console.log('promise2',promise2);

    setTimeout(()=>{
        console.log('promise1',promise1);
        console.log('promise2',promise2);
    },2000);
   
}

