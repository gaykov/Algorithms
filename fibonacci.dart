// Please, don't rely on this code. Just trying Dart.
class Fibonacci {
  var _cache = [1];
  
  int getRecursively(int index) {
    if (index < 2) {
      return 1;
    }
    
    if (_cache.length < index) {
      _cache.add(this.getRecursively(index - 1) + this.getRecursively(index - 2));
    }
    
    return _cache[index - 2];
  }
  
  List<int> getList(int index) {
    _cache.clear();
    getRecursively(index);
    
    var result = new List<int>.from([1]);
    result.addAll(_cache);
    return result;
  }
}

void main() {
  var fib = new Fibonacci();
  print(fib.getList(5));
}
