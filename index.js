import { useCssModule } from "vue";

export default (aModuleName) => {
    const module = useCssModule(aModuleName);
    return (...classes) =>
        classes.reduce((acc, item) => (acc += ` ${module[item]}`), "");
};


