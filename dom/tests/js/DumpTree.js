
function travers(node, indent)
{
    Dump("\n")
    indent += "  "
    var type = node.GetNodeType()
    if (type == 2) {
        Dump(indent + node.GetTagName())
        if (node.HasChildNodes()) {
            var children = node.GetChildNodes()
            var length = children.GetLength()
            //Dump("\n"+indent+length)
            var child = children.GetNextNode()
            var count = 0;
            while(count < length) {
                //Dump("\n"+indent+"**"+count)
                travers(child, indent)
                child = children.GetNextNode()
                count++
            }
        }
    }
    else if (type == 6) {
        //Dump("\n"+indent+"Text")
        Dump(indent + "Text")
    }
}

var node = document.documentElement

travers(node, "")
Dump("\n")

        