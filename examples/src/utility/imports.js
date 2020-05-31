import {
    writeInAFile
} from './utils';

export const writeImports = (path, component) => {

    // writing in a file 
    const imports = returnImports(component)
   writeInAFile(path, imports)
}

export const returnImports = (componentType) => {
  
    switch(componentType){
        case 'input':
            return `import { Input } from 'react-native-elements'`
        case 'button':
            return `import {Button} from 'react-native-elements'`
    }
}
