
// Block represents each 'item' in the blockchain
type Block struct {
	Index     int
	Timestamp string
	BPM       int
	Hash      string
	PrevHash  string
	Validator string
}
 
// Blockchain is a series of validated Blocks
var Blockchain []Block
var tempBlocks []Block
 
// candidateBlocks handles incoming blocks for validation
var candidateBlocks = make(chan Block)
 
// announcements broadcasts winning validator to all nodes
var announcements = make(chan string)
 
var mutex = &sync.Mutex{}
 
// validators keeps track of open validators and balances
