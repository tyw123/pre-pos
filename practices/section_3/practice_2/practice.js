function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
    //声明一个大小为100的数组存放对象信息，并初始化
      var a=[],num=[],test;
      for(var i=0;i<collection_a.length;i++)
      {
        a[i]={key:collection_a[i].key,count:collection_a[i].count};
        //num[i]=2;
      }


      for(var i=0;i<collection_a.length;i++)
      {
         for(var j=0;j<object_b.value.length;j++)
         {
            if(collection_a[i].key==object_b.value[j])
            {
              a[i].count=a[i].count-(a[i].count-a[i].count%3)/3;
              num[i]=a[i].count;
            }
         }


      }


      //检测输出是否正确
  /*   for(var i=0;i<=c;i++)
      {
        num1[i]=result[i].count;
        alp1[i]=result[i].key;
      }*/
      //var all=num1+alp1+abc;


      return a;
}

module.exports = create_updated_collection;
