#!/bin/bash
# ============================================================
# build.sh — Site Factory build script
# Assembles a deployable site from template + client files
# Usage: CLIENT=client-slug bash build.sh
# Default: builds the _example client
# ============================================================

CLIENT=${CLIENT:-_example}

echo "Building site for client: $CLIENT"

# Clean and create output directory
rm -rf dist
mkdir -p dist

# Copy template files (immutable backbone)
cp _template/index.html dist/
cp _template/base.css dist/
cp _template/engine.js dist/
cp _template/mentions-legales.html dist/

# Copy client files (unique per client)
cp clients/$CLIENT/config.js dist/
cp clients/$CLIENT/theme.css dist/

# Copy client assets if they exist
if [ -d "clients/$CLIENT/assets" ]; then
  cp -r clients/$CLIENT/assets dist/
fi

echo "Build complete → dist/"
ls -la dist/
