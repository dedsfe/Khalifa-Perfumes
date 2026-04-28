import json

base_products = [
    {
        "id": "afeef", "name": "Afeef", "brand": "Lattafa", "category": "Amadeirado",
        "coverImage": "./Assets/afeef_ai_nobg.png", "modalImage": "./Assets/afeef_ai_nobg.png",
        "glowColor": "rgba(212,154,137,0.3)",
        "description": "Uma fragrância floral e amadeirada que evoca a elegância do Oriente em cada nota.",
        "notes": {
            "top": ["Bergamota", "Limão", "Aldeídos"],
            "heart": ["Flor Branca", "Tuberosa", "Rosa"],
            "base": ["Almíscar", "Amadeirado", "Sândalo"]
        }
    },
    {
        "id": "yara", "name": "Yara Pink", "brand": "Lattafa", "category": "Doce",
        "coverImage": "./Assets/yara_ai_nobg.png", "modalImage": "./Assets/yara_ai_nobg.png",
        "glowColor": "rgba(201,122,126,0.3)",
        "description": "Doçura tropical com alma árabe. Uma fragrância irresistivelmente feminina.",
        "notes": {
            "top": ["Pêssego", "Frutas Tropicais", "Lichia"],
            "heart": ["Flor de Laranjeira", "Baunilha", "Rosa"],
            "base": ["Almíscar Branco", "Atalcado", "Sândalo"]
        }
    },
    {
        "id": "asad", "name": "Asad", "brand": "Lattafa", "category": "Amadeirado",
        "coverImage": "./Assets/asad_ai_nobg.png", "modalImage": "./Assets/asad_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.25)",
        "description": "Intensidade e poder em cada gota. O leão do Oriente Médio.",
        "notes": {
            "top": ["Canela", "Pimenta Preta", "Cardamomo"],
            "heart": ["Âmbar", "Oud", "Rosa"],
            "base": ["Baunilha", "Madeira de Cedro", "Almíscar"]
        }
    },
    {
        "id": "dalal", "name": "Dalal", "brand": "Al Rehab", "category": "Doce",
        "coverImage": "./Assets/dalal_ai_nobg.png", "modalImage": "./Assets/dalal_ai_nobg.png",
        "glowColor": "rgba(212,175,55,0.2)",
        "description": "Sofisticação árabe com doçura envolvente. Uma fragrância que seduz.",
        "notes": {
            "top": ["Cítrico", "Laranja", "Bergamota"],
            "heart": ["Caramelo", "Baunilha", "Doce"],
            "base": ["Almíscar", "Âmbar", "Sândalo"]
        }
    }
]

variations = [
    ("Oud Modest", "Lattafa", "Amadeirado"),
    ("Khamrah", "Lattafa", "Doce"),
    ("Fakhar", "Lattafa", "Floral"),
    ("Ameer Al Oudh", "Lattafa", "Amadeirado"),
    ("Bade'e Al Oud", "Lattafa", "Amadeirado"),
    ("Nebras", "Lattafa", "Doce"),
    ("Maahir", "Lattafa", "Floral"),
    ("Qaa'ed", "Lattafa", "Amadeirado"),
    ("Raghba", "Lattafa", "Doce"),
    ("Ana Abiyedh", "Lattafa", "Floral"),
    ("Choco Musk", "Al Rehab", "Doce"),
    ("Soft", "Al Rehab", "Doce"),
    ("Silver", "Al Rehab", "Cítrico"),
    ("Avenue", "Al Rehab", "Amadeirado"),
    ("Sultan", "Al Rehab", "Amadeirado"),
    ("Blanc", "Al Rehab", "Floral"),
    ("Cherry Flower", "Al Rehab", "Floral"),
    ("Bakhour", "Al Rehab", "Amadeirado"),
    ("Saat Safa", "Al Rehab", "Amadeirado"),
    ("Classic", "Al Rehab", "Amadeirado"),
]

import copy

products = copy.deepcopy(base_products)

# generate more to reach 40
count = len(products)
for i in range(36):
    var_idx = i % len(variations)
    base_idx = i % len(base_products)
    
    new_prod = copy.deepcopy(base_products[base_idx])
    new_prod["id"] = f"prod_{count}"
    new_prod["name"] = f"{variations[var_idx][0]} {i//len(variations) + 1 if i//len(variations) > 0 else ''}".strip()
    new_prod["brand"] = variations[var_idx][1]
    new_prod["category"] = variations[var_idx][2]
    
    products.append(new_prod)
    count += 1

with open('data.js', 'w') as f:
    f.write('const windowProducts = ')
    json.dump(products, f, indent=4, ensure_ascii=False)
    f.write(';\n')

