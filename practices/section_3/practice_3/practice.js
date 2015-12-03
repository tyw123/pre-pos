function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  //声明
  var result=[],c=0;
;

//求集和C
  //集和C的声明与初始化
  var a=[];
  for(var i=0;i<collection_a.length;i++)
  {
    a[i]={key:collection_a[0],count:1};
  }

  for(var i=1;i<collection_a.length;i++)
  {
    if(collection_a[i]!=a[c].key)
    {
      result[c]=a[c];
      c++;
      a[c].count=1;
      a[c].key=collection_a[i];
    }
    else
    {
      a[c].count++;
    }
    if(i==collection_a.length-1)
    {
      result[c]=a[c];
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
