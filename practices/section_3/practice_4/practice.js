function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  //声明部分
    var result=[],num1=[],alp1=[],abc,num,alp,temp;
    var c=0;
//求出中间集和
    //声明数组存放对象信息并初始化
    var a=[];
    for(var i=0;i<collection_a.length;i++)
    {
      a[i]={key:collection_a[0],count:1};
    }


    for(var i=1;i<collection_a.length;i++)
    {

      if(collection_a[i].length>1)
      {
         temp=collection_a[i].match(/\d+/g);
         num=Number(temp[0]);
         alp=collection_a[i].charAt(0);
         if(alp!=a[c].key)
         {
           result[c]=a[c];
           num1[c]=result[c].count;
           alp1[c]=result[c].key;
           ++c;
           a[c].count=num;
           a[c].key=alp;
         }
         else
         {
           a[c].count+=num;
         }
      }
      else
      {

         if(collection_a[i]!=a[c].key)
         {
           result[c]=a[c];
           num1[c]=result[c].count;
           alp1[c]=result[c].key;
           c++;
           a[c].count=0;
           a[c].key=collection_a[i];
         }

           a[c].count++;
      }
          if(i==collection_a.length-1)
          {
            result[c]=a[c];
            num1[c]=result[c].count;
            alp1[c]=result[c].key;
          }

    }
//判断集和C与集和B有无重合元素，有的话满三减一
  for(var i=0;i<result.length;i++)
  {
    for(var j=0;j<object_b.value.length;j++)
    {
      if(result[i].key==object_b.value[j])
      {
        result[i].count-=(result[i].count-result[i].count%3)/3;
      }
    }
  }


    return result;
}

module.exports = create_updated_collection;
