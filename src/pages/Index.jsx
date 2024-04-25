import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Heading } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Todo App</Heading>
      <Box mb={4}>
        <Input placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} mr={2} />
        <Button onClick={handleAddTodo} leftIcon={<FaPlus />} colorScheme="blue">
          Add
        </Button>
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" alignItems="center" justifyContent="space-between">
            {todo}
            <IconButton icon={<FaTrash />} aria-label="Delete task" onClick={() => handleDeleteTodo(index)} colorScheme="red" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
