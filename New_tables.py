
import pandas as pd

# Load the CSV file
df = pd.read_csv('Flight_data.csv')

# Extract the 'Australian_City' column and get distinct names
unique_cities = df['Australian_City'].dropna().unique()

# Create a new DataFrame with the unique city names
unique_cities_df = pd.DataFrame(unique_cities, columns=['Australian_City'])

# Save the unique city names to a new CSV file
unique_cities_df.to_csv('Unique_Australian_Cities.csv', index=False)
