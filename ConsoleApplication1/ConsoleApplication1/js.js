    var a1 = [1, 3, 6, 11]
        var a2 = [1, 3, 33, 44]
        var a3 = [1, 3, 55]
        a1= [12, 6, 8, 3]
        a2 =  [1, 3, 5, 8]
        a3 =  [9, 15, 7, 5]
        console.log(combinationCount(a1, a2, a3));
        function combinationCount(array1, array2, array3) {
            return combo(
                 array1.sort(function (a, b) { return parseInt(a) - parseInt(b) }),
                 array2.sort(function (a, b) { return parseInt(a) - parseInt(b) }),
                 array3.sort(function (a, b) { return parseInt(a) - parseInt(b) })
             )

        }

        function combo(arr1, arr2, arr3) {
            var cnt = 0;
            for (var i = 0; i < arr1.length; i++) {
                for (var j = 0; j < arr2.length; j++) {
                    if (arr1[i] >= arr2[j]) {
                        j = findlarger(arr1[i], arr2, j)
                        if (j == -1) break;
                    }
                    for (var k = 0; k < arr3.length; k++) {
                        if (arr2[j] >= arr3[k]) {
                            k = findlarger(arr2[j], arr3, k)
                            if (k == -1) break;
                        }
                        cnt++;
                    }

                }
            }
            console.log(cnt)
            return cnt;

        }

        function findlarger(a, arr2, index) {
            var start = index + 1;
            var end = arr2.length;
            var mid = parseInt((start + end) / 2);
            while (arr2[mid] <= a ) {
                start = mid;
                mid = parseInt((start + end) / 2);
                if (mid >= a.length - 1) break;
            }
            debugger
            if (mid >= a.length || arr2[mid] < a) return -1;
            var newmid = mid;
            var newmidtemp = mid;
            debugger
            while (arr2[newmid] > a && newmid > start) {
                newmidtemp = newmid
                newmid = parseInt((start + newmid) / 2)
            }
            debugger
            while (arr2[newmidtemp] > a && newmidtemp > start) {
                newmidtemp--;
            }
            if (arr2[newmidtemp] <= a) newmidtemp++;
            return newmidtemp;


        }
