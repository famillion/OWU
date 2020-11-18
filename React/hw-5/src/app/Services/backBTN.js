export function backBTN(path){
  let pathArr = path.split('/');
  pathArr.pop()
  let backPath = pathArr.join('/');

  return backPath;
}
