
//
// Dump the html content in html format
//
function html(node, indent)
{
    Dump("\n")
    //indent += "  "
    var type = node.GetNodeType()
    if (type == 2) {

        // open tag
        //Dump("\ndump tag\n")
        Dump("<" + node.GetTagName())

        // dump the attributes if any
        attributes = node.GetAttributes()
        if (null != attributes) {
            var countAttrs = attributes.GetLength()
            var index = 0
            while(index < countAttrs) {
                att = attributes.Item(index)
                if (null != att) {
                    //Dump("\ndump attribute\n")
                    Dump(" " + att.ToString())
                }
                index++
            }
        }

        // close tag
        Dump(">")

        // recursively dump the children
        if (node.HasChildNodes()) {
            // get the children
            var children = node.GetChildNodes()
            var length = children.GetLength()
            var child = children.GetNextNode()
            var count = 0;
            while(count < length) {
                html(child, indent)
                child = children.GetNextNode()
                count++
            }
        }
    }
    // if it's a piece of text just dump the text
    else if (type == 6) {
        //Dump("\ndump text\n")
        Dump(node.data)
    }
}

html(document.documentElement, "")
Dump("\n")

  