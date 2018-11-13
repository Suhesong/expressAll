const y=async ()=>{
    await setTimeout(()=>{
        console.log('Here are setTimeout!')
    },0)
    await x();
    console.log('我在time 的外部')
}

const x=()=>{
    console.log('我是x!')
};

y();
console.log('我在外部');