function count_same_elements(collection) {
  //在这里写入代码
  var result=[],num=[],alp=[];
  var a=[];
  for(var i=0;i<100;i++)
  {
    a[i]={key:collection[0],count:0};
  }
  var c=0;

  for(var i=1;i<collection.length;i++)
  {
    a[c].count++;
    if(collection[i]!=collection[i-1])
    {


     result[c]=a[c];

    // num[c]=result[c].count;
     //alp[c]=result[c].key;
      c++;
      a[c].count=0;
      a[c].key=collection[i];

    }
    if(i==collection.length-1)
    {

      a[c].count++;
      result[c]=a[c];
     // num[c]=result[c].count;
     // alp[c]=result[c].key;
    }
  }
  for(var i=0;i<=c;i++)
  {
    num[i]=result[i].count;
    alp[i]=result[i].key;
  }
  var all=num+alp;
  return result;
}

module.exports = count_same_elements;
