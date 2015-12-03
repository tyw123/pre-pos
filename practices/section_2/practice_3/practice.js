function count_same_elements(collection) {
  //在这里写入代码
  //声明部分
    var result=[],num1=[],alp1=[],abc,num,alp,temp;
    var c=0;

    //声明一个大小为100的数组存放对象信息，并初始化
    var a=[];
    for(var i=0;i<100;i++)
    {
      a[i]={name:collection[0],summary:1};
    }


    for(var i=1;i<collection.length;i++)
    {

      if(collection[i].length>1)
      {
         temp=collection[i].match(/\d+/g);
         num=Number(temp[0]);
         alp=collection[i].charAt(0);
         if(alp!=a[c].name)
         {
           result[c]=a[c];
           num1[c]=result[c].summary;
           alp1[c]=result[c].name;
           ++c;
           a[c].summary=num;
           a[c].name=alp;
         }
         else
         {
           a[c].summary+=num;
         }
      }
      else
      {

         if(collection[i]!=a[c].name)
         {
           result[c]=a[c];
           num1[c]=result[c].summary;
           alp1[c]=result[c].name;
           c++;
           a[c].summary=0;
           a[c].name=collection[i];
         }

           a[c].summary++;
      }
          if(i==collection.length-1)
          {
            result[c]=a[c];
            num1[c]=result[c].summary;
            alp1[c]=result[c].name;
          }

    }


    //检测输出是否正确
/*   for(var i=0;i<=c;i++)
    {
      num1[i]=result[i].count;
      alp1[i]=result[i].key;
    }*/
    var all=num1+alp1+abc;


    return result;
}

module.exports = count_same_elements;
