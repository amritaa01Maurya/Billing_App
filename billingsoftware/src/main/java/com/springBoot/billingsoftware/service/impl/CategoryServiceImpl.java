package com.springBoot.billingsoftware.service.impl;

import com.springBoot.billingsoftware.entity.CategoryEntity;
import com.springBoot.billingsoftware.io.CategoryRequest;
import com.springBoot.billingsoftware.io.CategoryResponse;
import com.springBoot.billingsoftware.repository.CategoryRepository;
import com.springBoot.billingsoftware.service.CategoryService;
import com.springBoot.billingsoftware.service.FileUploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    private final FileUploadService fileUploadService;
    @Override
    public CategoryResponse add(CategoryRequest request, MultipartFile file) {
//        first add imgurl in db
        String imgUrl = fileUploadService.uploadFile(file);
        CategoryEntity newCategory = convertToEntity(request);

        newCategory.setImgUrl(imgUrl);
//        to save in db
        newCategory = categoryRepository.save(newCategory);

        return convertToResponse(newCategory);
    }

    //read method

    @Override
    public List<CategoryResponse> read() {
        return categoryRepository.findAll()
                .stream()
                .map(categoryEntity -> convertToResponse(categoryEntity))
                .collect(Collectors.toList());
    }

    @Override
    public void delete(String categoryId) {
       CategoryEntity existingCategory = categoryRepository.findByCategoryId(categoryId)
                .orElseThrow(()-> new RuntimeException("Category not found: " + categoryId));

       //delete img first than category
        fileUploadService.deleteFile(existingCategory.getImgUrl());
        categoryRepository.delete(existingCategory);
    }

    // method
    private CategoryResponse convertToResponse(CategoryEntity newCategory) {
        return CategoryResponse.builder()
                .categoryId(newCategory.getCategoryId())
                .name(newCategory.getName())
                .description(newCategory.getDescription())
                .bgColor(newCategory.getBgColor())
                .imgUrl(newCategory.getImgUrl())
                .createdAt(newCategory.getCreatedAt())
                .updatedAt(newCategory.getUpdatedAt())
                .build();
    }


    private CategoryEntity convertToEntity(CategoryRequest request) {
        return CategoryEntity.builder()
                    .categoryId(UUID.randomUUID().toString())
                    .name(request.getName())
                    .description(request.getDescription())
                    .bgColor(request.getBgColor())
                    .build();

    }
}
