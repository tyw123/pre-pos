function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
    var collection_c=[];
        for (var i=0;i<collection_a.length;i++)
        {
            var a=collection_a[i].key;
            for(var j=0;j<collection_b.value.length;j++)
            {
               if(a==collection_b.value[j])
               {
                collection_c.push(a);
               }
            }
        }
    	return collection_c
}

module.exports = collect_same_elements;
