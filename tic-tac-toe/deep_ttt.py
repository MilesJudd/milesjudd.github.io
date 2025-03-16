import json
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from sklearn.preprocessing import OneHotEncoder

# Load game data
with open('game_data.json', 'r') as f:
    data = json.load(f)

# Prepare features and labels
X = [game['board'] for game in data]
y = [game['move'] for game in data]

# One-hot encode the board states
encoder = OneHotEncoder(handle_unknown='ignore')
X_encoded = encoder.fit_transform(X).toarray()

# Convert to PyTorch tensors
X_tensor = torch.tensor(X_encoded, dtype=torch.float32)
y_tensor = torch.tensor(y, dtype=torch.long)

# Define a simple neural network
class TicTacToeModel(nn.Module):
    def __init__(self):
        super(TicTacToeModel, self).__init__()
        self.fc1 = nn.Linear(X_encoded.shape[1], 64)
        self.fc2 = nn.Linear(64, 64)
        self.fc3 = nn.Linear(64, 9)

    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = torch.relu(self.fc2(x))
        x = self.fc3(x)
        return x

# Initialize the model, loss function, and optimizer
model = TicTacToeModel()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Train the model
for epoch in range(10):
    optimizer.zero_grad()
    outputs = model(X_tensor)
    loss = criterion(outputs, y_tensor)
    loss.backward()
    optimizer.step()
    print(f"Epoch {epoch + 1}, Loss: {loss.item()}")

# Save the model
torch.save(model.state_dict(), 'tic_tac_toe_model.pth')
