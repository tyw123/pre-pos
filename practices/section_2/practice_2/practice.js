function count_same_elements(collection) {
  //在这里写入代码
  //声明部分
    var result=[],num=[],alp=[],abc;
    var c=0;

    //声明一个大小为100的数组存放对象信息，并初始化
    var a=[];
    for(var i=0;i<100;i++)
    {
      a[i]={key:collection[0],count:1};
    }

    for(var i=1;i<collection.length;i++)
    {
          if(collection[i].length>1)
            {
             // c++;
             // a[c].count++;
              result[c]=a[c];
              c++;
              temp=collection[i].match(/\d+/g);
              a[c].count=Number(temp[0]);
              a[c].key=collection[i].charAt(0);
              result[c]=a[c];
            }
      else
      {


            if(collection[i]!=collection[i-1])
            {
             result[c]=a[c];
              c++;
              a[c].count=0;
              a[c].key=collection[i];

            }
            if(i==collection.length-1)
            {

              //a[c].count++;
              result[c]=a[c];
            }
             a[c].count++;
      }



    }


    //检测输出是否正确
    for(var i=0;i<=c;i++)
    {
      num[i]=result[i].count;
      alp[i]=result[i].key;
    }
    var all=num+alp+abc;


    return result;
}

module.exports = count_same_elements;
